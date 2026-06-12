import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mis")
export default class MisController {
  @operation({
    summary: "Get Mis",
  })
  @get()
  static getMis = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mis",
  })
  @post("{id}")
  static createMis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
