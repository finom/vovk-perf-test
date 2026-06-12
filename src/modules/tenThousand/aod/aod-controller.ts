import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aod")
export default class AodController {
  @operation({
    summary: "Get Aod",
  })
  @get()
  static getAod = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aod",
  })
  @post("{id}")
  static createAod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
