import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyq")
export default class EyqController {
  @operation({
    summary: "Get Eyq",
  })
  @get()
  static getEyq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyq",
  })
  @post("{id}")
  static createEyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
