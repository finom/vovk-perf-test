import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjf")
export default class GjfController {
  @operation({
    summary: "Get Gjf",
  })
  @get()
  static getGjf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjf",
  })
  @post("{id}")
  static createGjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
