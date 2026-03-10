import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asp")
export default class AspController {
  @operation({
    summary: "Get Asp",
  })
  @get()
  static getAsp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Asp",
  })
  @post("{id}")
  static createAsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
