import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhw")
export default class DhwController {
  @operation({
    summary: "Get Dhw",
  })
  @get()
  static getDhw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhw",
  })
  @post("{id}")
  static createDhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
