import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjc")
export default class GjcController {
  @operation({
    summary: "Get Gjc",
  })
  @get()
  static getGjc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjc",
  })
  @post("{id}")
  static createGjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
