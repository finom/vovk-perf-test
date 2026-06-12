import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhf")
export default class DhfController {
  @operation({
    summary: "Get Dhf",
  })
  @get()
  static getDhf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhf",
  })
  @post("{id}")
  static createDhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
