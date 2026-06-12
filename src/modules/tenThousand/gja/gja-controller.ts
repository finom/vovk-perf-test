import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gja")
export default class GjaController {
  @operation({
    summary: "Get Gja",
  })
  @get()
  static getGja = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gja",
  })
  @post("{id}")
  static createGja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
