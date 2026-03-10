import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iiv")
export default class IivController {
  @operation({
    summary: "Get Iiv",
  })
  @get()
  static getIiv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iiv",
  })
  @post("{id}")
  static createIiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
