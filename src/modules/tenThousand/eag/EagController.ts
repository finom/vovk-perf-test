import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eag")
export default class EagController {
  @operation({
    summary: "Get Eag",
  })
  @get()
  static getEag = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eag",
  })
  @post("{id}")
  static createEag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
