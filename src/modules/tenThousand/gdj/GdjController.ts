import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdj")
export default class GdjController {
  @operation({
    summary: "Get Gdj",
  })
  @get()
  static getGdj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdj",
  })
  @post("{id}")
  static createGdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
