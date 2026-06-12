import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahl")
export default class AhlController {
  @operation({
    summary: "Get Ahl",
  })
  @get()
  static getAhl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahl",
  })
  @post("{id}")
  static createAhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
