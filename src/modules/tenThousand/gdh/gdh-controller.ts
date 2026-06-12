import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdh")
export default class GdhController {
  @operation({
    summary: "Get Gdh",
  })
  @get()
  static getGdh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdh",
  })
  @post("{id}")
  static createGdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
