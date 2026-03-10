import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyz")
export default class DyzController {
  @operation({
    summary: "Get Dyz",
  })
  @get()
  static getDyz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dyz",
  })
  @post("{id}")
  static createDyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
