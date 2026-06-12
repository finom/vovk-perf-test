import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayy")
export default class AyyController {
  @operation({
    summary: "Get Ayy",
  })
  @get()
  static getAyy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ayy",
  })
  @post("{id}")
  static createAyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
