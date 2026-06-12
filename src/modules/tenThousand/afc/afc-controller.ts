import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afc")
export default class AfcController {
  @operation({
    summary: "Get Afc",
  })
  @get()
  static getAfc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afc",
  })
  @post("{id}")
  static createAfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
