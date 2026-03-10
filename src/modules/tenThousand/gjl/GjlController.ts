import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjl")
export default class GjlController {
  @operation({
    summary: "Get Gjl",
  })
  @get()
  static getGjl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjl",
  })
  @post("{id}")
  static createGjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
