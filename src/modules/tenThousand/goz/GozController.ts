import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("goz")
export default class GozController {
  @operation({
    summary: "Get Goz",
  })
  @get()
  static getGoz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Goz",
  })
  @post("{id}")
  static createGoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
