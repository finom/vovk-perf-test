import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("diy")
export default class DiyController {
  @operation({
    summary: "Get Diy",
  })
  @get()
  static getDiy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Diy",
  })
  @post("{id}")
  static createDiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
