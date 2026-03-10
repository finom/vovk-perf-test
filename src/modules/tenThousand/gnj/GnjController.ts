import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnj")
export default class GnjController {
  @operation({
    summary: "Get Gnj",
  })
  @get()
  static getGnj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gnj",
  })
  @post("{id}")
  static createGnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
