import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gld")
export default class GldController {
  @operation({
    summary: "Get Gld",
  })
  @get()
  static getGld = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gld",
  })
  @post("{id}")
  static createGld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
