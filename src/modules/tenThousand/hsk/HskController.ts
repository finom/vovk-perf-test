import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsk")
export default class HskController {
  @operation({
    summary: "Get Hsk",
  })
  @get()
  static getHsk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsk",
  })
  @post("{id}")
  static createHsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
