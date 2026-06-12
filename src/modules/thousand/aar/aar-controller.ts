import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aar")
export default class AarController {
  @operation({
    summary: "Get Aar",
  })
  @get()
  static getAar = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aar",
  })
  @post("{id}")
  static createAar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
