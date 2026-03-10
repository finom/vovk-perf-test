import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emn")
export default class EmnController {
  @operation({
    summary: "Get Emn",
  })
  @get()
  static getEmn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emn",
  })
  @post("{id}")
  static createEmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
