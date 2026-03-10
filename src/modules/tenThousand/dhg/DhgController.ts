import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhg")
export default class DhgController {
  @operation({
    summary: "Get Dhg",
  })
  @get()
  static getDhg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhg",
  })
  @post("{id}")
  static createDhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
