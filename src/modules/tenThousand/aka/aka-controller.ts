import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aka")
export default class AkaController {
  @operation({
    summary: "Get Aka",
  })
  @get()
  static getAka = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aka",
  })
  @post("{id}")
  static createAka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
