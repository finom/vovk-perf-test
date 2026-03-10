import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ou")
export default class OuController {
  @operation({
    summary: "Get Ou",
  })
  @get()
  static getOu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ou",
  })
  @post("{id}")
  static createOu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
