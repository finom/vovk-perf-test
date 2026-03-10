import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alk")
export default class AlkController {
  @operation({
    summary: "Get Alk",
  })
  @get()
  static getAlk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alk",
  })
  @post("{id}")
  static createAlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
