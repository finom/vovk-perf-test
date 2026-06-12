import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epj")
export default class EpjController {
  @operation({
    summary: "Get Epj",
  })
  @get()
  static getEpj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epj",
  })
  @post("{id}")
  static createEpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
