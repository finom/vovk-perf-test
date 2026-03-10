import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayv")
export default class AyvController {
  @operation({
    summary: "Get Ayv",
  })
  @get()
  static getAyv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ayv",
  })
  @post("{id}")
  static createAyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
