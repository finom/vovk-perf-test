import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmi")
export default class BmiController {
  @operation({
    summary: "Get Bmi",
  })
  @get()
  static getBmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmi",
  })
  @post("{id}")
  static createBmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
