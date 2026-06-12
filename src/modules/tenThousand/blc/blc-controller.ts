import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blc")
export default class BlcController {
  @operation({
    summary: "Get Blc",
  })
  @get()
  static getBlc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blc",
  })
  @post("{id}")
  static createBlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
