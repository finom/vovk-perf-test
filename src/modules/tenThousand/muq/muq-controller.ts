import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muq")
export default class MuqController {
  @operation({
    summary: "Get Muq",
  })
  @get()
  static getMuq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Muq",
  })
  @post("{id}")
  static createMuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
