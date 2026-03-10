import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mok")
export default class MokController {
  @operation({
    summary: "Get Mok",
  })
  @get()
  static getMok = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mok",
  })
  @post("{id}")
  static createMok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
