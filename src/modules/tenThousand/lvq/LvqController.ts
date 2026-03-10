import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvq")
export default class LvqController {
  @operation({
    summary: "Get Lvq",
  })
  @get()
  static getLvq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lvq",
  })
  @post("{id}")
  static createLvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
