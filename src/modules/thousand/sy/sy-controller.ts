import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sy")
export default class SyController {
  @operation({
    summary: "Get Sy",
  })
  @get()
  static getSy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sy",
  })
  @post("{id}")
  static createSy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
