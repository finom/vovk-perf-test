import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jew")
export default class JewController {
  @operation({
    summary: "Get Jew",
  })
  @get()
  static getJew = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jew",
  })
  @post("{id}")
  static createJew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
