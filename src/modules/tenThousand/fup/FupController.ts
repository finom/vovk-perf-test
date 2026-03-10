import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fup")
export default class FupController {
  @operation({
    summary: "Get Fup",
  })
  @get()
  static getFup = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fup",
  })
  @post("{id}")
  static createFup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
