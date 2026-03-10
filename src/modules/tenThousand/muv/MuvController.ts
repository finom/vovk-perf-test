import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muv")
export default class MuvController {
  @operation({
    summary: "Get Muv",
  })
  @get()
  static getMuv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Muv",
  })
  @post("{id}")
  static createMuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
