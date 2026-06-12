import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eig")
export default class EigController {
  @operation({
    summary: "Get Eig",
  })
  @get()
  static getEig = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eig",
  })
  @post("{id}")
  static createEig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
