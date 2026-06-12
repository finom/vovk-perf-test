import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqf")
export default class GqfController {
  @operation({
    summary: "Get Gqf",
  })
  @get()
  static getGqf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqf",
  })
  @post("{id}")
  static createGqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
