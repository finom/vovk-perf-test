import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eot")
export default class EotController {
  @operation({
    summary: "Get Eot",
  })
  @get()
  static getEot = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eot",
  })
  @post("{id}")
  static createEot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
