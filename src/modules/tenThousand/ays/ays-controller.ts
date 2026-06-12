import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ays")
export default class AysController {
  @operation({
    summary: "Get Ays",
  })
  @get()
  static getAys = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ays",
  })
  @post("{id}")
  static createAys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
