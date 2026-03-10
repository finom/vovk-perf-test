import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ake")
export default class AkeController {
  @operation({
    summary: "Get Ake",
  })
  @get()
  static getAke = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ake",
  })
  @post("{id}")
  static createAke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
