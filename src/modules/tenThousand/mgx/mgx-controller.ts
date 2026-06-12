import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgx")
export default class MgxController {
  @operation({
    summary: "Get Mgx",
  })
  @get()
  static getMgx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mgx",
  })
  @post("{id}")
  static createMgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
