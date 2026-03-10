import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nha")
export default class NhaController {
  @operation({
    summary: "Get Nha",
  })
  @get()
  static getNha = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nha",
  })
  @post("{id}")
  static createNha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
