import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hje")
export default class HjeController {
  @operation({
    summary: "Get Hje",
  })
  @get()
  static getHje = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hje",
  })
  @post("{id}")
  static createHje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
