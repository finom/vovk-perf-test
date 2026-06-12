import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ene")
export default class EneController {
  @operation({
    summary: "Get Ene",
  })
  @get()
  static getEne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ene",
  })
  @post("{id}")
  static createEne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
