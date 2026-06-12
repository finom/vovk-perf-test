import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iik")
export default class IikController {
  @operation({
    summary: "Get Iik",
  })
  @get()
  static getIik = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iik",
  })
  @post("{id}")
  static createIik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
