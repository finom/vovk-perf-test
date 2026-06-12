import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpo")
export default class HpoController {
  @operation({
    summary: "Get Hpo",
  })
  @get()
  static getHpo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpo",
  })
  @post("{id}")
  static createHpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
