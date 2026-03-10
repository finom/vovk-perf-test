import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nje")
export default class NjeController {
  @operation({
    summary: "Get Nje",
  })
  @get()
  static getNje = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nje",
  })
  @post("{id}")
  static createNje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
