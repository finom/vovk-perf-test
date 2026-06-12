import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afg")
export default class AfgController {
  @operation({
    summary: "Get Afg",
  })
  @get()
  static getAfg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afg",
  })
  @post("{id}")
  static createAfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
