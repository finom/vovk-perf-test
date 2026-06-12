import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjt")
export default class GjtController {
  @operation({
    summary: "Get Gjt",
  })
  @get()
  static getGjt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjt",
  })
  @post("{id}")
  static createGjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
