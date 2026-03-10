import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzo")
export default class GzoController {
  @operation({
    summary: "Get Gzo",
  })
  @get()
  static getGzo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzo",
  })
  @post("{id}")
  static createGzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
