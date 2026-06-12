import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aiq")
export default class AiqController {
  @operation({
    summary: "Get Aiq",
  })
  @get()
  static getAiq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aiq",
  })
  @post("{id}")
  static createAiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
